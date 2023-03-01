create table provas(
id bigint not null auto_increment,
nome varchar(100) not null,
descricao varchar(255) not null,
especialidade varchar(100) not null,
localidade varchar(255) not null,
predio varchar(4) not null,
sala varchar(10) not null,
dia varchar(10) not null,
hora varchar(5) not null,
nota varchar(3) not null,

ativo tinyint,

primary key (id)
);
