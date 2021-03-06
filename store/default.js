export default {
  test: 0,
  isMobileVisit: false,
  userSettings: {},
  // tokens: {},
  loading: true,
  waiting: [],
  assignUsers: [],
  projects: [],
  activeProjectUid: null,
  // currentProjectUid: null,
  isSidebarLocked: false,
  sidebarWidth: 220,
  sidebarZoomWidth: 0,
  sidebarMinWidth: 73,
  isChatPinned: false,
  chatWidth: 400,
  chatZoomWidth: 0,
  chatMinWidth: 350,
  chatMaxWidth: 550,
  chatMessage: '',
  projectsBarWidth: 70,
  contentMinWidth: 1024,
  // selectedTag: 0,
  comments: [],
  sidebarForceShow: false,
  owner: {},
  locale: 'en-US',
  showEvents: false,
  drafts: [],
  eventsCounts: [],
  isChatActive: false,
  isChatBig: false,
  cntUnreadChatMessages: 0,
  idMainChat: null,
  dateTimeFormats: {
    comments: 'D MMM Y',
    issues: 'D MMM Y',
    issuesWithoutYear: 'D MMM',
    default: 'D MMM Y',
    screensDateTitle: 'DD MMMM Y. dddd',
    screen: 'hh:mm:ss'
  },
  isChatSidebar: 1,
  unreadEvents: [],
  unreadEventsHeaders: {},
  unreadEventsPromise: null,
  companyUsers: [],
  companyProfileOptions: {},
  editorCustomColors: [],
  pushEnabled: true,
  sidebarComponent: null,
  chatComponent: null,
  cntUnreadChatChannels: [],
  serverDate: null,
  expiredWarning: null,
  files: [],
  filesHeaders: {}
}
