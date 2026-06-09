import { Spinner } from "@gfazioli/mantine-spinner";
import { Center, Loader } from "@mantine/core";

export const FormattedLoader = () => {
  return (
    <Center h={"50vh"}>
      <Spinner size="80" duration={400} color="green" />
    </Center>
  );
};

export default FormattedLoader;
