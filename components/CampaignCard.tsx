import Link from "next/link";
import type { Campaign } from "@/lib/types";
import { EditorialImage } from "./EditorialImage";

/**
 * Campaign tile. Campaigns are the proof of quality — clients buy campaigns,
 * not faces — so these read as editorial plates with quiet metadata.
 */
export function CampaignCard({
  campaign,
  sizes,
}: {
  campaign: Campaign;
  sizes: string;
}) {
  return (
    <Link
      href={`/#campaigns`}
      className="group block border-line p-[14px] transition-colors duration-500 md:p-[18px] [&:not(:last-child)]:border-r"
    >
      <EditorialImage
        src={campaign.image}
        alt={`${campaign.title} campaign`}
        sizes={sizes}
        placeholderLabel="Campaign"
        objectPosition="center 22%"
        className="aspect-[4/5] w-full"
      />
      <div className="mt-3">
        <div className="font-display text-xl md:text-[22px]">{campaign.title}</div>
        <div className="mt-1.5 font-sans text-[9px] font-light uppercase tracking-[0.18em] text-muted">
          Nº {campaign.number} · {campaign.location}
        </div>
      </div>
    </Link>
  );
}
