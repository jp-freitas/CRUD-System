import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateServiceOrder1610497811836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'service_order',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'requester',
            type: 'varchar',
          },
          {
            name: 'department',
            type: 'varchar',
          },
          {
            name: 'date_start',
            type: 'timestamp with time zone',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'clerk',
            type: 'varchar'
          },
          {
            name: 'reason',
            type: 'varchar'
          },
          {
            name: 'service',
            type: 'varchar'
          },
          {
            name: 'technician',
            type: 'varchar'
          },
          {
            name: 'date_end',
            type: 'timestamp with time zone'
          },
          {
            name: 'hour_end',
            type: 'time with time zone'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('service_order');
  }
}
