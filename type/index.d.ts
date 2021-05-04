interface productAddData {
  sku: string;
  nome: string;
  descricao_completa?: string ;
  ativo: boolean;
  destaque: boolean;
  tipo: 'normal' | 'atributo_opcao' | 'atributo';
  usado: false;
  categorias?: Array<string> | null;
}
interface productEditData {
  sku?: string;
  nome?: string;
  descricao_completa?: string ;
  ativo?: boolean;
  destaque?: boolean;
  tipo?: 'normal' | 'atributo_opcao' | 'atributo';
  usado?: false;
  categorias?: Array<string> | null;
}
interface couponAddData {
  aplicar_no_total: boolean;
  ativo: boolean;
  codigo: string;
  cumulativo: boolean;
  descricao?: number;
  quantidade: number;
  quantidade_por_cliente?: number;
  tipo: 'fixo' | 'atributo_opcao' | 'atributo';
  validade?: string;
  valor: string;
  valor_minimo?: string;
}

interface couponEditData {
  aplicar_no_total?: boolean;
  ativo: boolean;
  codigo?: string;
  cumulativo?: boolean;
  descricao?: number;
  quantidade?: number;
  quantidade_por_cliente?: number;
  tipo?: 'fixo' | 'atributo_opcao' | 'atributo';
  validade?: string;
  valor?: string;
  valor_minimo?: string;
}

interface ClientAddData {
  
}

interface ClientEditData {
  
}