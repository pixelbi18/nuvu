export interface TipoContenido {
  field_tipo_de_contenido: string;
}

export interface Entidadoautoridad {
  field_aliado_o_autoridad:    string;
  field_aliado_o_autoridad_id: string;
}

export interface TipoUsuario {
  field_tipo_de_usuario:    string;
  field_tipo_de_usuario_id: string;
}

export interface Titulo {
  title: string;
}


export interface Escuela {
  nid:                         string;
  field_image:                 string;
  title:                       string;
  view_node:                   string;
  body:                        string;
  field_tipo_de_licencia:      string;
  field_destacado:             Field;
  field_link:                  string;
  field_enlace_descarga:       string;
  field_habilitar_descarga:    Field;
  field_instrucciones_de_uso:  string;
  field_default_link:          Field;
  field_tipo_de_contenido:     FieldTipoDeContenido;
  field_tipo_de_contenido_id:  string;
  field_tipo_de_usuario:       string;
  field_tipo_de_usuario_id:    string;
  field_aliado_o_autoridad:    string;
  field_aliado_o_autoridad_id: string;
  created:                     string;
  changed:                     string;
  uid:                         Uid;
  field_default_link_1:        string;
}

export enum Field {
  Falso = 'Falso',
  True = 'True',
}

export enum FieldTipoDeContenido {
  Animación = 'Animación',
  DocumentoOGuíaDidáctica = 'Documento o guía didáctica',
  Infografía = 'Infografía',
  Interactivo = 'Interactivo',
  UnidadDeAprendizaje = 'Unidad de aprendizaje',
  Videotutorial = 'Videotutorial',
}

export enum Uid {
  AdminTecnico01 = 'admin.tecnico01',
  AnsvEscuela00 = 'ansv.escuela00',
}



export interface ConsultaRadicado {
  status:  number;
  message: Message;
}

export interface Message {
  RADICADO:             string;
  FECHA_RADICADO:       Date;
  RADICADO_ASOCIADO:    string;
  ASUNTO:               string;
  TIPO_DOCUMENTAL:      string;
  DESTINATARIO:         string;
  DIRECCION:            string;
  MUNICIPIO:            string;
  DEPARTAMENTO:         string;
  FOLIOS:               string;
  FOLIOS_DIGITALIZADOS: string;
  DESC_ANEXOS:          string;
  CUENTA_INTERNA:       string;
  GUIA:                 null;
  NIVEL_SEGURIDAD:      string;
  ARCHIVO:              string;
}
