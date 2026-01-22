"use client";

import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'
import { useUser } from "@clerk/nextjs"
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return <p className="p-4">Loading user...</p>
  }

  return (
    <>
      <InfoBar />

      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">

        {/* 👤 Logged-in User Info */}
        <div className="rounded-lg border p-4 bg-background">
          <h2 className="text-lg font-semibold mb-2">Account Information</h2>

          
          <p>
            <span className="font-medium">Email:</span>{" "}
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        {/* Existing Settings */}
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />

      </div>
    </>
  )
}

export default Page
