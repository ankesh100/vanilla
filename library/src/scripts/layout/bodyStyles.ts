/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { styleFactory, useThemeCache } from "@library/styles/styleUtils";
import { percent, viewHeight } from "csx";
import { cssRule } from "typestyle";
import { colorOut, background, fontFamilyWithDefaults, margins, paddings, fonts } from "@library/styles/styleHelpers";

export const bodyCSS = useThemeCache(() => {
    const globalVars = globalVariables();
    cssRule("html, body", {
        backgroundColor: colorOut(globalVars.body.backgroundImage.color),
        ...fonts({
            size: globalVars.fonts.size.medium,
            family: globalVars.fonts.families.body,
            color: globalVars.mainColors.fg,
        }),
        wordBreak: "break-word",
        overscrollBehavior: "none", // For IE -> https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
    });

    cssRule("*", {
        // For Mobile Safari -> https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
        "-webkit-overflow-scrolling": "touch",
    });

    cssRule("h1, h2, h3, h4, h5, h6", {
        display: "block",
        lineHeight: globalVars.lineHeights.condensed,
        ...margins({
            all: 0,
        }),
        ...paddings({
            all: 0,
        }),
    });

    cssRule("p", {
        ...margins({
            all: 0,
        }),
        ...paddings({
            all: 0,
        }),
    });
});

export const bodyClasses = useThemeCache(() => {
    const globalVars = globalVariables();
    const style = styleFactory("fullBackground");
    const image = globalVars.body.backgroundImage;
    const root = style(
        {
            display: !image ? "none" : "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: percent(100),
            height: viewHeight(100),
            zIndex: -1,
        },
        background(image),
    );

    return { root };
});
