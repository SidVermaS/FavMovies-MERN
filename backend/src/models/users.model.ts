import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Unique,
  AutoIncrement,
  Sequelize,
  BeforeCreate,
  AllowNull,
} from "sequelize-typescript";
import brcypt from "bcrypt";
import { TableNamesE } from "../utils/enums";

@Table({
  tableName: TableNamesE.users,
  timestamps: false,
  freezeTableName: true,
})
class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Unique
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  password: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: false,
  })
  name: string;

  @BeforeCreate
  static hashPasswordBeforeCreate(user: Users) {
    const saltRounds = 10;
    const salt = brcypt.genSaltSync(saltRounds);
    user.password = brcypt.hashSync(user.password, salt);
  }

  public static validatePassword(password: string, hashedPassword: string) {
    return brcypt.compare(password, hashedPassword);
  }
}

export default Users;
