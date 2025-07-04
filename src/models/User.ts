export interface UserAttributes {
    id: number
    username: string
    passwordHash: string
    createdAt: Date
}

export class User {
    private static users: User[] = []
    private static sequence = 1

    id: number
    username: string
    passwordHash: string
    createdAt: Date

    private constructor(attrs: UserAttributes) {
        this.id = attrs.id
        this.username = attrs.username
        this.passwordHash = attrs.passwordHash
        this.createdAt = attrs.createdAt
    }

    static create(username: string, passwordHash: string): User {
        const user = new User({
            id: this.sequence++,
            username,
            passwordHash,
            createdAt: new Date(),
        })
        this.users.push(user)
        return user
    }

    static findByUsername(username: string): User | undefined {
        return this.users.find((u) => u.username === username)
    }

    static findById(id: number): User | undefined {
        return this.users.find((u) => u.id === id)
    }
}
