import { User } from '../db'

export default function (app) {
    app.get('/api/user', async (req, res) => {
        res.json(await User.findAll())
    })
}
