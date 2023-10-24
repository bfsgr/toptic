import { useState } from 'react'
import { UploadIcon } from '@radix-ui/react-icons'
import { SelectCoordenadores } from './SelectCoordenadores'

interface SelecionaBancaProps {
  posicao: 'membro' | 'suplente'
  numero: number
  valor: string[]
  mudancaMembros: (valor: string[]) => void
}

export function SelectBanca({
  posicao,
  numero,
  valor,
  mudancaMembros,
}: SelecionaBancaProps) {
  const [selecao, setSelecao] = useState('interno')

  return (
    <div className="frame-banca">
      <div className="tipo-banca">
        <div>
          <label>
            Tipo do {posicao} #{numero}
          </label>
        </div>
        <select value={selecao} onChange={(e) => setSelecao(e.target.value)}>
          <option value="interno">Interno</option>
          <option value="externo">Externo</option>
        </select>
      </div>
      {selecao === 'interno' ? (
        <div className="nome-banca">
          <div>
            <label>
              Nome do {posicao} {selecao} #{numero}
            </label>
          </div>
          <div className="text-field-6">
            <SelectCoordenadores
              valor={valor.length > numero - 1 ? valor[numero - 1] : ''}
              mudancaMembros={(novoValor: string) => {
                const valoresAtualizados = [...valor]
                valoresAtualizados[numero - 1] = novoValor
                mudancaMembros(valoresAtualizados)
              }}
            />
          </div>
        </div>
      ) : selecao === 'externo' ? (
        <>
          <div className="nome-banca">
            <div>
              <label>
                Nome do {posicao} {selecao} #{numero}
              </label>
            </div>
            <div className="text-field-6">
              <SelectCoordenadores
                valor={valor.length > numero - 1 ? valor[numero - 1] : ''}
                mudancaMembros={(novoValor: string) => {
                  const valoresAtualizados = [...valor]
                  valoresAtualizados[numero - 1] = novoValor
                  mudancaMembros(valoresAtualizados)
                }}
              />
            </div>
          </div>
          <div className="curriculo-banca">
            <div>
              <label>
                Currículo do {posicao} #{numero}
              </label>
            </div>
            <div className="text-field-3">
              <input
                className="inputFile"
                type="file"
                accept=".pdf"
                name={`curriculo${selecao}${numero}`}
              />
              <label className="placeholderFake">Selecione um arquivo</label>
              <UploadIcon />
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
