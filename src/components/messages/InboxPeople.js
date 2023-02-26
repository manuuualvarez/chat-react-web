import React from 'react'
import { SearchBox } from '../SearchBox'
import { Sidebar } from './Sidebar'

export const InboxPeople = () => {
  return (
        <>
            <div className="inbox_people">
                {/* Search Header */}
                <SearchBox/>
                {/* Sidebar user list */}
                <Sidebar/>
            </div>
            </>
  )
}
