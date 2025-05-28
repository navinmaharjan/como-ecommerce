'use client'

import React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'


const BreadCrumbComponent = () => {
    const pathname = usePathname()

    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(segment => segment)
        const breadcrumbs = [{ href: '/', label: 'Home' }]

        pathSegments.forEach((segment, index) => {
            // Decode the segment and replace % with -
            const decodedSegment = decodeURIComponent(segment).replace(/%/g, '-')
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`
            const label = decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1).replace(/-/g, ' ')
            breadcrumbs.push({ href, label })
        })
        return breadcrumbs
    }

    const breadcrumbs = generateBreadcrumbs()

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={crumb.href}>
                            <BreadcrumbItem>
                                {index === breadcrumbs.length - 1 ? (
                                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbComponent