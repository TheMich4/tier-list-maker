import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.cjs";
import useWindowDimensions from "./useWindowDimensions";

const fullConfig = resolveConfig(tailwindConfig);

const useGetCurrentBreakpoint = () => {
  const { width } = useWindowDimensions();
  const screens = fullConfig?.theme?.screens;

  if (!screens) {
    return undefined;
  }

  const keys = Object.keys(screens);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = screens[key];
    const valueInt = parseInt(value.replace("px", ""), 10);

    if (width < valueInt) {
      return key;
    }
  }

  // If we get here, we're at the largest breakpoint
  return keys[keys.length - 1];
};

export default useGetCurrentBreakpoint;
