interface IDictionary { [index: string]: any }
const config: IDictionary = {
  'development': {
    'username': 'root',
    'password': 'dhevan007',
    'database': 'insta',
    'host': '127.0.0.1',
    'port': '3305',
    'dialect': 'mysql',
    'jwt_secret': 'secret',
    'session_secret': 'secret',
  },
  'test': {
    'username': 'root',
    'password': 'dhevan007',
    'database': 'insta',
    'host': '127.0.0.1',
    'port': '3305',
    'dialect': 'mysql',
    'jwt_secret': 'secret',
    'session_secret': 'secret',
  },
  'production': {
    'username': 'root',
    'password': 'dhevan007',
    'database': 'insta',
    'host': '127.0.0.1',
    'port': '3305',
    'dialect': 'mysql',
    'jwt_secret': 'secret',
    'session_secret': 'secret',
  },
}
export { config }

