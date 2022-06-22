import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import { initializeApp } from 'firebase/app'

import firebaseConfig from './config'

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig)
    this.auth = getAuth(app)
  }

  async signUp({ name, email, password }) {
    const newUser = await createUserWithEmailAndPassword(this.auth, email, password)

    return await updateProfile(newUser.user, {
      displayName: name
    })
  }
}

const firebase = new Firebase()

export default firebase