import React from 'react'
import Image from 'next/image'
import heroImage from '@/images/photos/calgary_hero.jpg'

export const HeroSection = () => {
  return (
    <div className="relative mt-[64px] flex w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-red-500 opacity-10"></div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1260px] flex-col px-4 py-32">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Welcome to YYC Tech.
        </h1>
        <p className="text-md mt-6 max-w-2xl text-white text-opacity-80 sm:text-lg">
          Whether you&apos;re a seasoned developer, tech enthusiast, or someone
          looking to dive into the world of innovation, you&apos;ve come to the
          right place. Explore upcoming events, meetups, and connect with
          thriving communities on platforms like Slack and Discord. Let&apos;s
          build, learn, and grow together!
        </p>
      </div>
    </div>
  )
}

export default HeroSection
