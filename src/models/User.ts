import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
/*
- v4 = tipo de uuid.
- as uuid = renomeia o v4 para uuid.
*/

@Entity('users')
class User {
	@PrimaryColumn()
  readonly id: string

	@Column()
	name: string

	@Column()
	email: string

	@CreateDateColumn()
	created_at: Date

	constructor() {
		if(!this.id) {
			this.id = uuid()
		}
	}
}

export {User}