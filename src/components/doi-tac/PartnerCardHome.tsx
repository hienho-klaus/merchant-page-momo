import Link from 'next/link'
import type { Partner } from '@/data/partners'
import PartnerLogo from './PartnerLogo'

export default function PartnerCardHome({ partner }: { partner: Partner }) {
  return (
    <Link
      href={`/doi-tac/${partner.slug}`}
      className="group flex flex-col gap-2"
    >
      {/* Logo card — landscape, logo fills area */}
      <div className="relative aspect-[3/2] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group-hover:shadow-md group-hover:border-gray-200 transition-all duration-200">
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <PartnerLogo name={partner.name} logo={partner.logo} domain={partner.domain} size="lg" />
        </div>
      </div>

      {/* Brand name below */}
      <p className="text-xs text-gray-600 font-medium truncate px-0.5 group-hover:text-momo transition-colors">
        {partner.name}
      </p>
    </Link>
  )
}
