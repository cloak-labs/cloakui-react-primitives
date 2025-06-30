import { formatDate, type FormatDateProps } from "@cloakui/utils";
import { type FC } from "react";
import { type ReactStyleProps } from "../types";

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
