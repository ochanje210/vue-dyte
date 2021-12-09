interface MeetingConfig {
  roomName: string;
  authToken: string;
  showSetupScreen?: boolean;
  autoTune?: boolean;
  apiBase?: string;
}
interface ButtonProp {
  icon: HTMLElement;
  label: string;
  position: string;
  onClick: Function;
  type?: "popover";
  url?: string;
}
interface DyteControlBar {
  buttons: any[];
  _setButtons: any;
  addButton(button: ButtonProp): number;
  removeButton(button: number): void;
}
enum Layout {
  MULTI = "MULTI",
  HIGHLIGHTED = "HIGHLIGHTED",
  SINGLE = "SINGLE",
}
type GridConfig = {
  layout?: string | Layout;
  participantVideo?: {
    fit?: "contain";
    controlButton?: {
      icon: HTMLElement;
      onClick: () => void;
    };
  };
};
interface DyteGrid {
  layouts: typeof Layout;
  update(gridConfig: GridConfig): void;
  setOverlay(element: Element | string, timeout?: number): void;
}
interface DyteParticipant {
  id: string;
  name: string;
  audioEnabled: any;
  picture: any;
  isMe: any;
  isPinned: any;
  videoEnabled: any;
  videoTrack: any;
  audioTrack: any;
  clientSpecificId: any;
  metadata: {
    view_type: string;
    preset_name: string;
  };
  _update(peer: any, hook: any): void;
  sendMessage(message: object): void;
  disableAudio(): void;
  disableVideo(): void;
  pin(): void;
  unpin(): void;
  setOverlay(element: any): void;
  zoom({ scale, x, y }: { scale: any; x: any; y: any }): void;
  updateRole(roleName: string): void;
  updatePreset(presetName: string): void;
}
interface DyteSelfParticipant {
  id: string;
  name: string;
  audioEnabled: any;
  picture: any;
  isMe: any;
  isScreensharing: any;
  isPinned: any;
  videoEnabled: any;
  videoTrack: any;
  audioTrack: any;
  _videoHook: any;
  clientSpecificId: any;
  isPresenting: any;
  metadata: {
    view_type: string;
    preset_name: string;
  };
  _update(peer: any, hook: any): void;
  enableAudio(): void;
  enableVideo(): void;
  disableAudio(): void;
  disableVideo(): void;
  enableScreenshare(): void;
  disableScreenshare(): void;
  pin(): void;
  unpin(): void;
  setOverlay(element: any): void;
  zoom({ scale, x, y }: { scale: any; x: any; y: any }): void;
  updateRole(roleName: string): void;
  updatePreset(presetName: string): void;
  startPresenting(): void;
  stopPresenting(): void;
}
interface DytePlugin {
  id: string;
  name: string;
  isActivated: boolean;
  data: any[];
  activate(): void;
  deactivate(): void;
  sendData(data: any): void;
}
enum MessageTypes {
  text = 0,
  image = 1,
  file = 2,
  poll = 3,
}
interface ChatMessageBase {
  userId: string;
  displayName: string;
  read?: boolean;
  pluginId?: string; // If this message is from a plugin, then the plugin'd id, otherwise null.
  time: number;
}
interface TextMessage extends ChatMessageBase {
  type: MessageTypes.text;
  message: string;
}
interface ImageMessage extends ChatMessageBase {
  type: MessageTypes.image;
  link: string;
}
interface FileMessage extends ChatMessageBase {
  type: MessageTypes.file;
  name: string;
  size: number;
  link: string;
}
interface PollMessage extends ChatMessageBase {
  type: MessageTypes.poll;
  pollId: string;
}
type ChatMessage = TextMessage | ImageMessage | FileMessage | PollMessage;
type WebsocketMessage = {
  type: string;
  payload?: any;
};
type ThemeControlBarElement = {
  plugins?: boolean;
  screenshare?: boolean;
  invite?: boolean;
  participants?: boolean;
  chat?: boolean;
  reactions?: boolean;
  polls?: boolean;
  fullscreen?: boolean;
  layout?: boolean;
};
type ThemeControlBar = {
  is_enabled: boolean;
  elements?: ThemeControlBarElement;
};
type ThemeWaitingRoom = {
  is_enabled: boolean;
  enable_preview?: boolean;
  element?: HTMLElement | string;
};
type ThemeHeader = {
  is_enabled: boolean;
  elements?: ThemeHeaderElement;
};
type ThemeHeaderElement = {
  timer?: boolean;
  title?: boolean;
  logo?: string;
  participant_count?: boolean;
  change_layout?: boolean;
};
type ThemeColor = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  textPrimary?: string;
  videoBackground?: string;
};
type ThemeDimention = {
  width?: number;
  height?: number;
  mode?: string;
};
enum WaitingRoomTypes {
  skip = "SKIP",
  onAccept = "ON_ACCEPT",
  skipOnPrivilegedUserEntry = "SKIP_ON_PRIVILEGED_USER_ENTRY",
  skipOnAccept = "ON_ACCEPT",
}
type PluginConfig = {
  defaultAccess: "blacklist" | "whitelist";
  handlesViewOnly?: boolean;
};
type PluginPermissionsTypes = {
  can_close: boolean;
  can_start: boolean;
  can_edit_acl?: boolean;
  config?: {
    [pluginId: string]: PluginConfig;
  };
};
type PollsPermissionsTypes = {
  can_create: boolean;
  can_vote: boolean;
  can_view: boolean;
};
type ProducePermissionsTypes = {
  video: StreamPermissionTypes;
  audio: boolean;
  screenshare: StreamPermissionTypes;
};
type StreamPermissionTypes = {
  allow: boolean;
  quality: "hd" | "vga" | "qvga" | "full";
  frame_rate: number;
};
type ChatPermissionTypes = {
  public: PublicChatPermissionTypes;
  private?: PrivateChatPermissionTypes;
};
type PublicChatPermissionTypes = {
  can_send: boolean;
  text: boolean;
  files: boolean;
};
type PrivateChatPermissionTypes = {
  can_send: boolean;
  can_receive: boolean;
  text: boolean;
  files: boolean;
};
enum DyteViewTypes {
  groupCall = "GROUP_CALL",
  webinar = "WEBINAR",
  audioRoom = "AUDIO_ROOM",
}
type AloneHereType = {
  is_enabled: boolean;
  element?: HTMLElement;
};
// main role type start
type RoleType = {
  accept_waiting_requests: boolean;
  accept_present_requests?: boolean;
  request_produce: boolean;
  can_allow_participant_audio: boolean;
  can_allow_participant_screensharing: boolean;
  can_allow_participant_video: boolean;
  request_kick_participant: boolean;
  kick_participant: boolean;
  pin_participant: boolean;
  can_record: boolean;
  can_edit_display_name: boolean;
  waiting_room_type: WaitingRoomTypes;
  plugins: PluginPermissionsTypes;
  polls: PollsPermissionsTypes;
  produce: ProducePermissionsTypes;
  chat: ChatPermissionTypes;
  reactions: boolean;
  hidden_participant?: boolean;
  is_recorder?: boolean;
  show_participant_list: boolean;
  can_present: boolean;
  can_change_participant_role: boolean; // v2
  view_type: DyteViewTypes;
  can_change_theme?: boolean; // v2
};
type ThemeGridType = {
  multi: {
    maxVideoCount: number;
    videoFit: string;
  };
  single: {
    maxVideoCount: number;
    videoFit: string;
  };
  defaultView: string;
};
// main theme type
type ThemeBodyType = {
  setup_screen?: {
    is_enabled: boolean;
  };
  waiting_room?: ThemeWaitingRoom;
  control_bar?: ThemeControlBar;
  header?: ThemeHeader;
  colors?: ThemeColor;
  dimensions?: ThemeDimention;
  alone_here?: AloneHereType;
  pip_mode?: boolean; // v2
  plugins?: string[]; // v2
  auto_tune?: boolean;
  grid?: ThemeGridType;
};
interface UIConfigTypes {
  waitingRoom?: {
    roomElement?: any;
    showSelf?: boolean;
  };
  controlBar?: boolean;
  controlBarElements?: {
    plugins?: boolean;
    screenShare?: boolean;
    share?: boolean;
    participants?: boolean;
    chat?: boolean;
    polls?: boolean;
    fullscreen?: boolean;
  };
  header?: boolean;
  headerElements?: {
    clock?: boolean;
    title?: boolean;
    logo?: boolean;
    participantCount?: boolean;
  };
  aloneHereElement?: boolean;
  logo?: string;
  colors?: {
    primary: string;
    secondary: string;
    textPrimary: string;
    videoBackground: string;
    text?: string;
    background?: string;
  };
  dimensions?: {
    width?: number;
    height?: number;
    mode?: string;
  };
  grid?: {
    multi?: {
      maxVideoCount?: number;
      videoFit?: string;
    };
    single?: {
      maxVideoCount: number;
      videoFit: string;
    };
    defaultView?: string;
  };
}
interface DyteModule {
  type: "sidebar" | "button";
  icon: any;
  sidebarComponent?: {
    name: string;
    component: any;
  };
  contextComponent?: any;
}
interface DyteModules {
  getAll(): DyteModule[];
  add(module: DyteModule): void;
  initAndAdd(module: any): void;
}
interface DyteConnectionConfig {
  clientId: string;
  roomName: string;
  authToken: string;
  autoTune?: boolean;
  endpoints: any;
  apiBase?: string;
}
enum Events {
  participantJoin = "participantJoin",
  participantLeave = "participantLeave",
  disconnect = "disconnect",
  connect = "connect",
  meetingEnded = "meetingEnded",
  roomMessage = "roomMessage",
  chatMessage = "chatMessage",
  message = "message",
  meetingJoined = "meetingJoined",
  activeSpeaker = "activeSpeaker",
  recordingStarted = "recordingStarted",
  recordingStopped = "recordingStopped",
  participantVideoZoomed = "participantVideoZoomed",
  localMediaConnected = "localMediaConnected",
}
type SessionConfig = {
  theme: ThemeBodyType;
  permissions: RoleType;
};
interface ConnectionEvents {
  [Events.participantJoin]: (participant: DyteParticipant) => any;
  [Events.participantLeave]: (participant: DyteParticipant) => any;
  [Events.disconnect]: () => any;
  [Events.connect]: () => any;
  [Events.meetingEnded]: ({ kicked: string }: { kicked: any }) => any;
  [Events.meetingJoined]: () => any;
  [Events.chatMessage]: (message: ChatMessage) => any;
  [Events.message]: (data: any) => any;
  [Events.roomMessage]: (data: any) => any;
  [Events.activeSpeaker]: (
    participant: DyteParticipant | DyteSelfParticipant
  ) => any;
  [Events.recordingStarted]: () => any;
  [Events.recordingStopped]: () => any;
  [Events.participantVideoZoomed]: (payload: {
    participant: DyteParticipant;
    zoom: {
      scale: number;
      x: number;
      y: number;
    };
  }) => any;
  [Events.localMediaConnected]: () => any;
}
interface Meeting {
  on<U extends keyof ConnectionEvents>(
    event: U,
    listener: ConnectionEvents[U]
  ): this;
  emit<U extends keyof ConnectionEvents>(
    event: U,
    ...args: Parameters<ConnectionEvents[U]>
  ): boolean;
}
interface Meeting {
  connectionConfig: DyteConnectionConfig;
  config: SessionConfig;
  controlBar: DyteControlBar;
  grid: DyteGrid;
  participants: Array<DyteSelfParticipant | DyteParticipant>;
  self: DyteSelfParticipant;
  plugins: DytePlugin[];
  Events: typeof Events;
  _setUIConfig: any;
  _onError: any;
  _controlsHook: any;
  showSetupScreen: boolean;
  leaveRoom: () => void;
  kickAll: () => void;
  kick: (peerId: string) => void;
  modules: DyteModules;
  _uiConfig: any;
  updateUIConfig(config: UIConfigTypes): void;
  addParticipantControl(control: any): void;
  sendRoomMessage(message: any): void;
  sendMessage(peerId: string, message: any): void;
  createPopup(element: any): void;
  closePopup(): void;
  onError(_onError: any): void;
  onSocketMessage(message: WebsocketMessage): void;
  _addUpdateParticipant(peer: any, hook: any): void;
  _removeParticipant(peer: any): void;
  init(rootElem: any): void;
}
enum DyteErrors {
  CLIENTID_INVALID = "CLIENTID_INVALID",
  MEETING_UNAUTHORIZED = "MEETING_UNAUTHORIZED",
  MEETING_NOTFOUND = "MEETING_NOTFOUND",
}

export { MeetingConfig, DyteErrors, Meeting };
