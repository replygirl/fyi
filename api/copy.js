const fetchRoles = () => {
  return 'roles'
}

const fetchIntro = () => {
  return 'intro'
}

export default async (_req, res) => {
  const [roles, intro] = await Promise.all([fetchRoles(), fetchIntro()])
  res.status(200).send({ roles, intro })
}
