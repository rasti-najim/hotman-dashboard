import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";
import {
  curveNatural,
  curveBasis,
  curveBasisOpen,
  curveCardinal,
} from "@visx/curve";
import { cityTemperature } from "@visx/mock-data";
import { useEffect } from "react";

const data = cityTemperature;

const data1 = [
  { x: "2020-01-01", y: 50 },
  { x: "2020-01-02", y: 10 },
  { x: "2020-01-03", y: 20 },
];

const data2 = [
  { x: "2020-01-01", y: 30 },
  { x: "2020-01-02", y: 40 },
  { x: "2020-01-03", y: 80 },
];

const accessors = {
  x: {
    "New York": (d) => d.date,
    "San Francisco": (d) => d.date,
    Austin: (d) => d.date,
  },
  y: {
    "New York": (d) => d["New York"],
    "San Francisco": (d) => d["San Francisco"],
    Austin: (d) => d.Austin,
  },
};

const nycAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d["New York"],
};

const sfAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d["San Francisco"],
};

const austinAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d.Austin,
};

export default function AnimatedChart() {
  useEffect(() => console.log(cityTemperature));
  return (
    <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <AnimatedAxis orientation="bottom" />
      <AnimatedAxis orientation="left" />
      <AnimatedGrid columns={false} numTicks={4} />
      <AnimatedLineSeries
        dataKey="New York"
        data={data}
        // {...nycAccessors}
        xAccessor={accessors.x["New York"]}
        yAccessor={accessors.y["New York"]}
        curve={curveNatural}
        stroke="#000"
      />
      <AnimatedLineSeries
        dataKey="San Francisco"
        data={data}
        // {...sfAccessors}
        xAccessor={accessors.x["San Francisco"]}
        yAccessor={accessors.y["San Francisco"]}
        curve={curveNatural}
      />
      <AnimatedLineSeries
        dataKey="Austin"
        data={data}
        // {...austinAccessors}
        xAccessor={accessors.x.Austin}
        yAccessor={accessors.y.Austin}
        curve={curveNatural}
      />
      <Tooltip
        // snapTooltipToDatumX
        // snapTooltipToDatumY
        showVerticalCrosshair
        showDatumGlyph
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {/* {tooltipData.nearestDatum.key} */}
              {accessors.x.Austin(tooltipData.nearestDatum.datum)}
            </div>
            <br />
            <br />
            {Object.keys(tooltipData?.datumByKey ?? {})
              .filter((city) => city)
              .map((city) => (
                <div key={city}>
                  <em
                    style={{
                      color: colorScale?.(city),
                      textDecoration:
                        tooltipData?.nearestDatum?.key === city
                          ? "underline"
                          : undefined,
                    }}
                  >
                    {city}
                  </em>{" "}
                  {tooltipData?.nearestDatum?.datum
                    ? accessors.y[city](tooltipData?.nearestDatum?.datum)
                    : "–"}
                  ° F
                </div>
              ))}
            {/* {tooltipData.nearestDatum.key == "New York" ? (
              <>
                {accessors.x["New York"](tooltipData.nearestDatum.datum)} {", "}
                {accessors.y["New York"](tooltipData.nearestDatum.datum)}
              </>
            ) : null}
            {tooltipData.nearestDatum.key == "San Francisco" ? (
              <>
                {accessors.x["San Francisco"](tooltipData.nearestDatum.datum)}
                {", "}
                {accessors.y["San Francisco"](tooltipData.nearestDatum.datum)}
              </>
            ) : null}
            {tooltipData.nearestDatum.key == "Austin" ? (
              <>
                {accessors.x.Austin(tooltipData.nearestDatum.datum)} {", "}
                {accessors.y.Austin(tooltipData.nearestDatum.datum)}
              </>
            ) : null} */}
          </div>
        )}
      />
    </XYChart>
  );
}
