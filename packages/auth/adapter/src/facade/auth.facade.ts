import UserFacade from './user.facade'

export default class AuthFacade {
    public readonly user: UserFacade = new UserFacade()
}
