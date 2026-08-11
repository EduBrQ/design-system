import { useState } from "react";
import { Info, Plus, Trash2 } from "lucide-react";
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  EmptyState,
  Grid,
  IconButton,
  Input,
  Modal,
  Pagination,
  Radio,
  Select,
  Skeleton,
  Spinner,
  Stack,
  StatTile,
  Switch,
  Table,
  Tabs,
  Textarea,
  Tooltip,
  useToast,
} from "../../../src";
import { DocExample, DocSection } from "../components/DocSection";

export function ComponentsPage() {
  const [page, setPage] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const notify = useToast();

  return (
    <div className="docs-stack">
      <div className="docs-page-head">
        <span className="docs-eyebrow">Referência viva</span>
        <h1>Componentes</h1>
        <p className="docs-lede">
          Cada exemplo abaixo é o componente real do pacote, renderizado com os tokens da marca ativa — troque a
          marca no topo da página para ver a diferença.
        </p>
      </div>

      <DocSection id="layout" title="Layout" description="Primitivos de composição — nenhum um deles define cor.">
        <DocExample label="Stack (direction, gap, align, justify)">
          <Stack direction="row" gap={3} wrap>
            <span className="docs-fill">A</span>
            <span className="docs-fill">B</span>
            <span className="docs-fill">C</span>
          </Stack>
        </DocExample>
        <DocExample label="Grid (cols=2 no mobile, 4 a partir de md)">
          <Grid cols={2} colsMd={4} gap={3}>
            <span className="docs-fill">1</span>
            <span className="docs-fill">2</span>
            <span className="docs-fill">3</span>
            <span className="docs-fill">4</span>
          </Grid>
        </DocExample>
        <DocExample label="Container (size=md)">
          <Container size="md" className="docs-fill" style={{ padding: "var(--space-3)" }}>
            Largura máxima 760px, centralizado
          </Container>
        </DocExample>
      </DocSection>

      <DocSection id="acoes" title="Ações">
        <DocExample label="Button — variant">
          <Stack direction="row" gap={2} wrap>
            <Button variant="primary">Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Perigo</Button>
            <Button variant="primary" size="sm">
              Pequeno
            </Button>
            <Button variant="primary" disabled>
              Desabilitado
            </Button>
          </Stack>
        </DocExample>
        <DocExample label="IconButton (exige aria-label)">
          <Stack direction="row" gap={2}>
            <IconButton icon={<Plus size={16} />} aria-label="Adicionar" variant="primary" />
            <IconButton icon={<Trash2 size={16} />} aria-label="Excluir" variant="danger" />
          </Stack>
        </DocExample>
      </DocSection>

      <DocSection id="formulario" title="Formulário">
        <Grid cols={1} colsMd={2} gap={4}>
          <DocExample label="Input">
            <Input label="Quantidade" placeholder="0" hint="Valor em kg" />
          </DocExample>
          <DocExample label="Input com erro">
            <Input label="Placa" defaultValue="ABC1D2" error="Formato inválido" />
          </DocExample>
          <DocExample label="Textarea">
            <Textarea label="Observações" placeholder="Detalhe o ocorrido..." />
          </DocExample>
          <DocExample label="Select">
            <Select
              label="Status"
              placeholder="Selecione"
              options={[
                { value: "aberta", label: "Aberta" },
                { value: "andamento", label: "Em andamento" },
                { value: "concluida", label: "Concluída" },
              ]}
            />
          </DocExample>
        </Grid>
        <DocExample label="Checkbox, Radio e Switch">
          <Stack direction="row" gap={5} wrap>
            <Checkbox label="Lembrar atendente" defaultChecked />
            <Stack direction="row" gap={3}>
              <Radio name="prioridade" label="Normal" defaultChecked />
              <Radio name="prioridade" label="Urgente" />
            </Stack>
            <Switch label="Notificações ativas" defaultChecked />
          </Stack>
        </DocExample>
      </DocSection>

      <DocSection id="dados" title="Dados">
        <DocExample label="Badge — tone">
          <Stack direction="row" gap={2} wrap>
            <Badge tone="accent">Monitorado</Badge>
            <Badge tone="success">Ativo</Badge>
            <Badge tone="warning">Atenção</Badge>
            <Badge tone="danger">Crítico</Badge>
            <Badge tone="neutral">Arquivado</Badge>
          </Stack>
        </DocExample>
        <DocExample label="Card">
          <Card title="Viveiro 03 — Camarão Rosa" meta="Densidade 18/m² · Ciclo dia 42" action={<Badge tone="warning">Atenção</Badge>}>
            <Button variant="primary" size="sm">
              Registrar ração
            </Button>
          </Card>
        </DocExample>
        <DocExample label="StatTile">
          <Grid cols={3} gap={3}>
            <StatTile label="Viveiros ativos" value="12" />
            <StatTile label="Ração hoje" value="340" unit="kg" />
            <StatTile label="FCR médio" value="1.42" size="lg" />
          </Grid>
        </DocExample>
        <DocExample label="Table">
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Th>Viveiro</Table.Th>
                <Table.Th>Ração manhã</Table.Th>
                <Table.Th>Mortalidade</Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Td>Viveiro 01</Table.Td>
                <Table.Td>62 kg</Table.Td>
                <Table.Td>0</Table.Td>
              </Table.Row>
              <Table.Row>
                <Table.Td>Viveiro 02</Table.Td>
                <Table.Td>71 kg</Table.Td>
                <Table.Td>3</Table.Td>
              </Table.Row>
            </Table.Body>
          </Table>
        </DocExample>
        <DocExample label="Avatar e Divider">
          <Stack direction="row" gap={3} align="center">
            <Avatar name="Eduardo Barbosa" size="lg" />
            <Avatar name="Maria Alves" size="md" />
            <Divider orientation="vertical" style={{ height: 32 }} />
            <Avatar name="R Costa" size="sm" />
          </Stack>
        </DocExample>
      </DocSection>

      <DocSection id="feedback" title="Feedback">
        <Stack gap={3}>
          <Alert tone="accent" title="Sincronização em andamento" icon={<Info size={18} />}>
            Os dados dos viveiros estão sendo atualizados.
          </Alert>
          <Alert tone="success" title="Ração registrada">
            Viveiro 03 atualizado com sucesso.
          </Alert>
          <Alert tone="warning" title="Mortalidade acima da média" onClose={() => {}}>
            Verifique a aeração do viveiro 02.
          </Alert>
          <Alert tone="danger" title="Falha ao salvar">
            Tente novamente em alguns instantes.
          </Alert>
        </Stack>
        <DocExample label="Spinner e Skeleton">
          <Stack direction="row" gap={4} align="center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Stack gap={2} style={{ width: 160 }}>
              <Skeleton height={12} width="80%" />
              <Skeleton height={12} width="60%" />
            </Stack>
          </Stack>
        </DocExample>
        <DocExample label="EmptyState">
          <EmptyState
            title="Nenhuma OS aberta"
            description="Quando um atendente abrir uma ordem de serviço, ela aparece aqui."
            action={<Button variant="secondary">Abrir OS</Button>}
          />
        </DocExample>
        <DocExample label="Tooltip (hover ou foco)">
          <Tooltip label="Exportar como CSV">
            <Button variant="secondary">Exportar</Button>
          </Tooltip>
        </DocExample>
        <DocExample label="Toast">
          <Button
            variant="primary"
            onClick={() => notify({ title: "Ração registrada", description: "Viveiro 03 atualizado.", tone: "success" })}
          >
            Disparar toast
          </Button>
        </DocExample>
      </DocSection>

      <DocSection id="overlay-navegacao" title="Overlay & navegação">
        <DocExample label="Modal">
          <Button variant="secondary" onClick={() => setModalOpen(true)}>
            Abrir modal
          </Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirmar exclusão"
            footer={
              <>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={() => setModalOpen(false)}>
                  Excluir
                </Button>
              </>
            }
          >
            Essa ação não pode ser desfeita. Deseja continuar?
          </Modal>
        </DocExample>
        <DocExample label="Tabs">
          <Tabs defaultValue="racao">
            <Tabs.List>
              <Tabs.Tab value="racao">Ração</Tabs.Tab>
              <Tabs.Tab value="mortalidade">Mortalidade</Tabs.Tab>
              <Tabs.Tab value="anotacoes">Anotações</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="racao">Histórico de ração do viveiro selecionado.</Tabs.Panel>
            <Tabs.Panel value="mortalidade">Registros de mortalidade por data.</Tabs.Panel>
            <Tabs.Panel value="anotacoes">Notas livres da equipe de campo.</Tabs.Panel>
          </Tabs>
        </DocExample>
        <DocExample label="Breadcrumbs">
          <Breadcrumbs
            items={[{ label: "Fazenda", href: "#" }, { label: "Viveiro 03", href: "#" }, { label: "Ração" }]}
          />
        </DocExample>
        <DocExample label="Pagination">
          <Pagination page={page} pageCount={12} onPageChange={setPage} />
        </DocExample>
      </DocSection>
    </div>
  );
}
