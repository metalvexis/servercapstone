import bcrypt from 'bcrypt'
const saltRounds = 10

export const generate = async (plaintxt) => {
  return await bcrypt.hash(plaintxt, saltRounds)
}

export const check = async (plaintxt, hash) => {
  return await bcrypt.compare(plaintxt, hash)
}

export default {
  generate,
  check
}
