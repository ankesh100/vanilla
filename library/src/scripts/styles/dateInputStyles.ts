/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { debugHelper, unit } from "@library/styles/styleHelpers";
import { style } from "typestyle";
import { percent, px } from "csx";

export function dateRangeClasses(theme?: object) {
    const globalVars = globalVariables(theme);
    const debug = debugHelper("dateRange");

    const root = style({
        display: "block",
        position: "relative",
        width: percent(100),
        ...debug.name(),
    });

    const boundary = style({
        ...debug.name("boundary"),
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        width: percent(100),
        $nest: {
            "& + .dateRange-boundary": {
                marginTop: unit(12),
            },
        },
    });

    const label = style({
        ...debug.name("label"),
        width: percent(100),
        overflow: "hidden",
        fontWeight: globalVars.fonts.weights.semiBold,
        wordBreak: "break-word",
        textOverflow: "ellipsis",
        maxWidth: percent(100),
    });

    const input = style({
        ...debug.name("input"),
        minWidth: unit(136),
        maxWidth: percent(100),
        flexGrow: 1,
    });

    return { root, boundary, label, input };
}

export function dayPickerInputClasses(theme?: object) {
    const debug = debugHelper("dayPickerInput");

    const root = style({
        display: "inline-flex",
        flexGrow: 1,
        ...debug.name(),
    });
    const day = style({
        whiteSpace: "nowrap",
        ...debug.name("day"),
    });
    const weekday = style({
        whiteSpace: "nowrap",
        ...debug.name("weekday"),
    });
    return { root };
}
