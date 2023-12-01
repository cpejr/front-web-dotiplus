import { colors, fonts } from "./styles/StyleVariables";
import Routes from "./Routes";
import { ConfigProvider } from "antd";

export default function AppProvider() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: colors.grey.background,
          colorText: colors.white,
          fontFamily: fonts.default,
          fontSize: "15px",
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
}
