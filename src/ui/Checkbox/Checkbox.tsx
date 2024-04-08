import { memo, type ComponentProps } from "react";

type Props = ComponentProps<"input">;

export const Checkbox = memo(({ ...rest }: Props) => {
  return <input {...rest} type="checkbox" />;
});
