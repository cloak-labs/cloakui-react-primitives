import { FormatDateProps, formatDate } from "@cloakui/utils";
import { FC } from "react";
import { ReactStyleProps } from "../types";

export const Date: FC<ReactStyleProps & FormatDateProps> = ({
  dateTime,
  locales,
  options,
  className,
  ...props
}) => (
  <dl className={className} {...props}>
    <dt className="sr-only">Date</dt>
    <dd className="text-root-dim text-sm leading-6">
      <time dateTime={dateTime}>
        {formatDate({ dateTime, locales, options })}
      </time>
    </dd>
  </dl>
);
