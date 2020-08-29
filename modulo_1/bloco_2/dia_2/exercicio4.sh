#!/bin/bash
# Shell Script que verifica se o caminho até um arquivo existe ("file path"). 
# 
# - se existir, imprime na tela a mensagem: "O caminho _ está habilitado!" e 
# verifica se há permissão de escrita (tendo permissão, mostra a mensagem: 
# "Você tem permissão para editar _". ); 
# # - se não existir, mostra a mensagem: "Você NÃO foi autorizado a editar _". 

# O _ nas mensagens deve ser substituído pelo ("file path").


FILE="/home/usuario/Documentos/github/my-shell-scripts/exercicio4.sh"
if [ -e "$FILE" ]
  then
    echo "O caminho $FILE está habilitado!"
fi
if [ -w "$FILE" ]
  then
    echo "Você tem permissão para editar $FILE"
  else
    echo "Você NÃO foi autorizado a editar $FILE"
fi