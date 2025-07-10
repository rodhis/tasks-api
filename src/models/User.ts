import bcrypt from 'bcrypt';

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
    private passwordHash: string
    createdAt: Date

    private constructor(attributes: UserAttributes) {
        this.id = attributes.id
        this.username = attributes.username
        this.passwordHash = attributes.passwordHash
        this.createdAt = attributes.createdAt
    }

    static create(username: string, password: string): User {
        const hash = bcrypt.hashSync(password, 10);
        const user = new User({
            id: this.sequence++,
            username,
            passwordHash: hash,
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

    async verifyPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }

  toJSON() {
    return { id: this.id, username: this.username, createdAt: this.createdAt };
  }
}

