import { motion } from "framer-motion"

interface ProfileSectionProps {
  name: string
  bio: string
  imageUrl: string
}

export function ProfileSection({ name, bio }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-xl font-semibold tracking-tight text-gray-800">{name}</h1>
      <p className="mt-2 text-sm text-gray-500">{bio}</p>
    </div>
  )
}