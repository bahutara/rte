import { styled } from "@laodeaksarr/design-system";
import { ToolbarButton } from "./ToolbarButton/ToolbarButton";

export const Toolbar = styled("button", {
  zIndex: 1,
  backgroundColor: "var(--laodeaksar-color-foreground)",
  borderBottom: `1px solid var(--laodeaksar-colors-body)`,
  btr: "$2",
  padding: `$2 $3`,

  variants: {
    sticky: {
      true: {
        $$stickyOffset: 0,

        position: "sticky",
        top: "$$stickyOffset",
      },
      false: {
        position: "relative",
        top: "$$stickyOffset",
      },
    },
  },
  defaultVariants: {
    sticky: true,
  },
});

export const ToolbarInner = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  margin: "-$2",
});

export const ToolbarGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  margin: `$2`,
});

export const ToolbarControl = styled(ToolbarButton, {
  "& + &": {
    borderLeftWidth: 0,
  },

  "&:first-of-type": {
    borderTopLeftRadius: "$1",
    borderBottomLeftRadius: "$1",
  },

  "&:last-of-type": {
    borderTopRightRadius: "$1",
    borderBottomRightRadius: "$1",
  },
});
