import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ size, isTransparent = false }) => ({
  borderRadius: 2,
  width: size || 16,
  height: size || 16,
  border: isTransparent ? `1.5px solid #8B9199` : `none`,
  backgroundColor: isTransparent ? "transparent" : "#FD853A",

  ".Mui-focusVisible &": {
    outline: "2px auto var(--primary-color)",
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ size }) => ({
  "&::before": {
    display: "block",
    width: size || 16,
    height: size || 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23FD853Ae8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
}));

function BpCheckbox({ onChange, isTransparent, checked, size, ...props }) {
  return (
    <Checkbox
      sx={{
        padding: "0px",
      }}
      onChange={onChange}
      color="default"
      checked={checked}
      checkedIcon={<BpCheckedIcon size={size} />}
      icon={<BpIcon size={size} isTransparent={isTransparent} />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export const CheckBox = ({ size, isTransparent, onChange, checked }) => {
  return (
    <BpCheckbox
      onChange={onChange}
      isTransparent={isTransparent}
      size={size}
      checked={checked}
    />
  );
};
