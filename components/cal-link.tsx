import type { AnchorHTMLAttributes, ReactNode } from "react";

const calUrl = "https://cal.com/nandinerdene-tsedendamba-eajyns/az-jargal";

type CalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function CalLink({ children, ...props }: CalLinkProps) {
  return (
    <a
      href={calUrl}
      data-cal-link="nandinerdene-tsedendamba-eajyns/az-jargal"
      data-cal-namespace="az-jargal"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      aria-haspopup="dialog"
      {...props}
    >
      {children}
    </a>
  );
}
