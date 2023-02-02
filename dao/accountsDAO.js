import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let accounts

export default class accountsDAO {
    static async injectDB(conn)
    {
        if(accounts)
        {
            return
        }

        try {
            accounts = await conn.db(process.env.ACCOUNT_NS).collection("accounts")
        } catch (e) {
            console.error(`Unable to establish a connection handle in experienceDAO: ${e}`)
        }
    }

    static async addAccount(email, city, country)
    {
        try {

            // if(await accounts.findOne(email))
            // {
            //     console.log("Email already exists")
            //     return;
            // }

            const accountDoc = {
                email: email,
                city: city,
                country: country,
            }

            return await accounts.insertOne(accountDoc)
        } catch (err) {
            console.error(`Unable to post account data ${e}`)
            return {error: err}
        }
    }
}