import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from "sequelize-typescript";
import { TableNamesE } from "../utils/enums";
import Users from "./users.model";

@Table({
  tableName: TableNamesE.movies,
  timestamps: false,
  freezeTableName: true,
})
class Movies extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    // autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  name: string;

  @Column({ type: DataType.DECIMAL,
    allowNull: false })
  rating: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false
  })
  cast: string[];

  @Column({
    type: DataType.STRING(32),
    allowNull: false
  })
  genre: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  release: Date;

  @ForeignKey(()=>Users)
  @Column
  user_id: number;

  // @BelongsTo(()=>Users)
  // user: Users
}

export default Movies;
