import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80"
                profileSrc="https://images.unsplash.com/photo-1622822381714-9c3d4ee79106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                title="Jakob Rosen" />
            <Story
                image="https://images.unsplash.com/photo-1606053418976-1753cebfec11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA2fHxjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1564172556663-2bef9580fc44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                title="Cole Keister" />
            <Story
                image="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                profileSrc="https://images.unsplash.com/photo-1622598262238-7411103c8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                title="Eduardo Gorghetto" />
            <Story
                image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                profileSrc="https://images.unsplash.com/photo-1542325383-ff5af189d9c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80"
                title="Jayakody Anthanas" />
            <Story
                image="https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://images.unsplash.com/photo-1622901525607-9605b5328f33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                title="Hanson Lu" />
        </div>
    )
}

export default StoryReel
