import { CheckIcon, InfoCircledIcon, UploadIcon } from '@radix-ui/react-icons'
import {
  Button,
  Callout,
  Flex,
  RadioGroup,
  Separator,
  Text,
} from '@radix-ui/themes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import { SelectBanca } from '../../components/SelectBanca'
import { SelectCoordenadores } from '../../components/SelectCoordenadores'

export const SolicitaBanca = () => {
  const navigate = useNavigate()

  const handleCancelar = () => {
    navigate('/aluno')
  }

  const [tipo, setTipo] = useState<number>(1)
  const [curso, setCurso] = useState<number>(1)

  const [tituloProposta, setTituloProposta] = useState<string>('')
  const [tipoBancada, setTipoBancada] = useState<number>(1)
  const [bloco, setBloco] = useState<string>('')
  const [sala, setSala] = useState<string>('')
  const [data, setData] = useState<string>('')
  const [horario, setHorario] = useState<string>('')
  const [orientador, setOrientador] = useState<string>('')
  const [coorientadorUm, setCoorientadorUm] = useState<string>('')
  const [coorientadorDois, setCoorientadorDois] = useState<string>('')

  // Membros: 3 a 5
  const [membros, setMembros] = useState<string[]>([])
  // Suplentes: 0 a 2
  const [suplentes, setSuplentes] = useState<string[]>([])
  const [tipoAnexo, setTipoAnexo] = useState<string>('')
  const [anexo, setAnexo] = useState<string>('')

  const handleTipoChange = (value: string) => {
    setTipo(parseInt(value))
  }

  const handleCursoChange = (value: string) => {
    setCurso(parseInt(value))
  }

  const handleTituloProposta = (value: string) => {
    setTituloProposta(value)
  }

  const handleTipoBanca = (value: string) => {
    setTipoBancada(parseInt(value))
  }

  const handleBloco = (value: string) => {
    setBloco(value)
  }

  const handleSala = (value: string) => {
    setSala(value)
  }

  const handleData = (value: string) => {
    setData(value)
  }

  const handleHorario = (value: string) => {
    setHorario(value)
  }

  const handleorientador = (value: string) => {
    setOrientador(value)
  }

  const handleorientadorUm = (value: string) => {
    setCoorientadorUm(value)
  }

  const handleorientadorDois = (value: string) => {
    setCoorientadorDois(value)
  }

  const handleTipoAnexo = (value: string) => {
    setTipoAnexo(value)
  }

  const handleAnexo = (value: string) => {
    setAnexo(value)
  }

  return (
    <Navigation title="Solicitar banca">
      <div className="frame">
        <form>
          <div className="div">
            <div className="div-1">
              <label className="text-wrapper">Tipo </label>
              <RadioGroup.Root
                color="purple"
                value={tipo.toString()}
                onValueChange={(value) => handleTipoChange(value)}
              >
                <Flex gap="2" direction="row">
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="1" /> Defesa
                    </Flex>
                  </Text>
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="2" /> Qualificação
                    </Flex>
                  </Text>
                </Flex>
              </RadioGroup.Root>
            </div>
            <div className="div-2">
              <label className="text-wrapper">Curso </label>
              <RadioGroup.Root
                color="purple"
                value={curso.toString()}
                onValueChange={handleCursoChange}
              >
                <Flex gap="2" direction="row">
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="1" /> Mestrado
                    </Flex>
                  </Text>
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="2" /> Doutorado
                    </Flex>
                  </Text>
                </Flex>
              </RadioGroup.Root>
            </div>
          </div>
          <div className="div-3">
            <label className="label">Título da proposta </label>
            <input
              type="text"
              placeholder="Título da proposta"
              name="tituloProposta"
              id="tituloProposta"
              value={tituloProposta}
              onChange={(e) => handleTituloProposta(e.target.value)}
            />
          </div>
          <div className="div-4">
            <label className="text-wrapper">Tipo de banca </label>
            <RadioGroup.Root
              color="purple"
              value={tipoBancada.toString()}
              onValueChange={(value) => handleTipoBanca(value)}
            >
              <Flex gap="2" direction="row">
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="1" className="radio" /> Presencial
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="2" className="radio" /> Híbrido
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="3" className="radio" /> Remoto
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>
          </div>
          <div className="div-5">
            <div className="label-wrapper">
              <label htmlFor="">Bloco </label>
              <input
                type="text"
                placeholder="ex. C56"
                name="bloco"
                id="bloco"
                value={bloco}
                onChange={(e) => handleBloco(e.target.value)}
              />
            </div>
            <div className="div-wrapper">
              <label htmlFor="">Sala</label>
              <input
                type="text"
                placeholder="Número da sala"
                name="sala"
                id="sala"
                value={sala}
                onChange={(e) => handleSala(e.target.value)}
              />
            </div>
            <div className="div-wrapper">
              <label htmlFor="">Data</label>
              <input
                type="date"
                placeholder="dd/mm/aaaa"
                name="data"
                id="data"
                value={data}
                onChange={(e) => handleData(e.target.value)}
              />
            </div>
            <div className="div-wrapper">
              <label htmlFor="">Horário</label>
              <input
                type="time"
                placeholder="hh:mm"
                name="horario"
                id="horario"
                value={horario}
                onChange={(e) => handleHorario(e.target.value)}
              />
            </div>
          </div>
          <div className="div-6">
            <div className="text-field">
              <label htmlFor="">Orientador </label>
              <div>
                <SelectCoordenadores
                  valor={orientador}
                  mudancaMembros={handleorientador}
                />
              </div>
            </div>
            <div className="text-field">
              <label htmlFor="">Coorientador </label>
              <SelectCoordenadores
                valor={coorientadorUm}
                mudancaMembros={handleorientadorUm}
              />
            </div>
            <div className="text-field">
              <label htmlFor="">Coorientador </label>
              <SelectCoordenadores
                valor={coorientadorDois}
                mudancaMembros={handleorientadorDois}
              />
            </div>
          </div>

          <Separator
            className="design-component-instance-node"
            orientation="horizontal"
            size="1"
            style={{ margin: '15px 1% 15px 1%', width: '98%' }}
          />
          <div className="text-wrapper-2">Composição da banca</div>
          <Callout.Root variant="soft" color="purple">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              A defesa de mestrado deve contar, obrigatoriamente, com pelo menos
              um membro externo.
            </Callout.Text>
          </Callout.Root>
          {/* MESTRADO = 1 */}
          {curso === 1 && (
            <div className="div-7">
              <SelectBanca
                posicao="membro"
                numero={1}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={2}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={3}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={1}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={2}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
            </div>
          )}
          {/* DOUTORADO = 2 */}
          {curso === 2 && (
            <div className="div-7">
              <SelectBanca
                posicao="membro"
                numero={1}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={2}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
              <SelectBanca
                posicao="membro"
                numero={1}
                valor={membros}
                mudancaMembros={(novosMembros) => setMembros(novosMembros)}
              />
            </div>
          )}
          <Separator
            className="design-component-instance-node"
            orientation="horizontal"
            size="1"
            style={{ margin: '15px 1% 15px 1%', width: '98%' }}
          />
          <div className="div-8">
            {/* DEFESA = 1 */}
            {tipo === 1 && (
              <div>
                <SelectBanca
                  posicao="suplente"
                  numero={1}
                  valor={suplentes}
                  mudancaMembros={(novosSuplentes) =>
                    setSuplentes(novosSuplentes)
                  }
                />
                <SelectBanca
                  posicao="suplente"
                  numero={1}
                  valor={suplentes}
                  mudancaMembros={(novosSuplentes) =>
                    setSuplentes(novosSuplentes)
                  }
                />
              </div>
            )}
          </div>
          <Separator
            className="design-component-instance-node"
            orientation="horizontal"
            size="1"
            style={{ margin: '15px 1% 15px 1%', width: '98%' }}
          />
          <div className="text-wrapper-2">Anexos</div>
          <div className="div-9">
            <label className="label">Tipo anexo </label>
            <div className="text-field-2">
              <select
                name="tipoAnexo"
                id="tipoAnexo"
                value={tipoAnexo}
                onChange={(e) => handleTipoAnexo(e.target.value)}
              >
                <option value="">Dissetação</option>
              </select>
            </div>

            <div className="div-11">
              <label className="label">Arquivo </label>
              <div className="text-field-3">
                <input
                  className="inputFile"
                  type="file"
                  accept=".pdf"
                  name="arquivo"
                  id="arquivo"
                  value={anexo}
                  onChange={(e) => handleAnexo(e.target.value)}
                />
                <label className="placeholderFake">Selecione um arquivo</label>
                <UploadIcon />
              </div>
            </div>
          </div>
          <div className="div-10">
            <Button className="cancelaButton" onClick={handleCancelar}>
              Cancelar
            </Button>
            <Button className="checkButton">
              Enviar solicitação
              <CheckIcon width="16" height="16" />
            </Button>
          </div>
        </form>
      </div>
    </Navigation>
  )
}
