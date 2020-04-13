import React from 'react'
import * as S from './styled'

const Todo = () => {
  return (
    <S.SectionWrapper>
      <S.TodoWrapper>
        <S.Input placeholder="Insira uma tarefa" />
        <S.TableSection>
          <S.Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th width="22%">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item#1</td>
                <td><i class="fas fa-trash-alt"></i></td>
              </tr>
              <tr>
                <td>Item#2</td>
                <td><i class="fas fa-trash-alt"></i></td>
              </tr>
            </tbody>
          </S.Table>
        </S.TableSection>
        <S.ActionsWrapper>
          <S.Button>Completar</S.Button>
          <S.Button>Remover</S.Button>
          <S.Button>Todas</S.Button>
          <S.Button>Pendentes</S.Button>
          <S.Button>Completas</S.Button>
        </S.ActionsWrapper>
      </S.TodoWrapper>
    </S.SectionWrapper>
  )
}

export default Todo
