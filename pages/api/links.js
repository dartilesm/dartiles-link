import links from '../../links'

export default function handler(req, res) {
  res.status(200).json(links)
}
