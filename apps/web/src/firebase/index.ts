import './config'
import AuthFirebase from './auth/auth.firebase'
import UserFirestore from './db/user.firestore'

class Firebase {
    readonly auth = new AuthFirebase()
    readonly db = {
        user: new UserFirestore(),
    }
    readonly realtime = {
        // some: new SomeDataRealtime(),
    }
}

const fb = new Firebase()
export default fb
