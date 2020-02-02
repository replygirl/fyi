import Airtable from 'airtable'

Airtable.configure({
  apiKey: 'key5MhtTJRMNXz3Br',
  timeout: 3000
})

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

const fetchIntro = () => new Promise((resolve, reject) =>
  base('intro')
    .select({ view: 'Grid view' })
    .firstPage((error, records) => error
      ? reject(error)
      : resolve(records.map(r => ({
        text: r.get('text'),
        url: r.get('url')
      })))
    )
)

const fetchRoles = () => new Promise((resolve, reject) =>
  base('roles')
    .select({ view: 'Grid view' })
    .firstPage((error, records) => error
      ? reject(error)
      : resolve(records.map(r => ({
        role: r.get('role'),
        project: {
          name: r.get('project'),
          url: r.get('projectUrl')
        }
      })))
    )
)

export default async (_req, res) => {
  try {
    const [intro, roles] = await Promise.all([fetchIntro(), fetchRoles()])
    res.status(200).json({ intro, roles })
  } catch({ error, message, statusCode }) {
    res.status(statusCode).json({ error, message })
  }
}
