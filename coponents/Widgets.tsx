import { SearchIcon } from '@heroicons/react/outline'
import { maxHeaderSize } from 'http';
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
            <SearchIcon className='h-5 w-5 text-gray-400' />

            <input type="text" placeholder='Search Twitter' 
             className=' flex-1 bg-transparent outline-none'/>
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="neymarjr"
            options={{height: maxHeaderSize}}
            />


    </div>
  )
}

export default Widgets