import accountsDAO from "../dao/accountsDAO.js";

export default class AccountsController {
    static async apiPostAccount(req, res, next){
        try {
            const email = req.body.email;
            const country = req.body.country;
            const city = req.body.city;

            //console.log(email);

            const AccountResponse = await accountsDAO.addAccount(
                email,
                country,
                city,
            )
            
            res.json({status: "success"})

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}