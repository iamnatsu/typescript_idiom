class BasicInfo {
  id: string;
  name: string;
  code: string;
}

class User extends BasicInfo {
  postList? : Array<{
    departmentId: string;
    positionId: string;
  }>;
  constructor(public id, public name, public code, postList?: User['postList']) {
    super();
    if (postList) this.postList = postList;
  }
}

type Department = BasicInfo;
class Position extends BasicInfo {
  rank: number;
}

// keyof キーワード
function printInfo(obj: BasicInfo, key: keyof BasicInfo) {
  console.log(obj[key])
}

// プロパティアクセス型
function printPostList(postList?: User['postList']){
  if (!postList) return;
  
  postList.forEach(p => {
    console.log('printPostList')
    console.log(p.departmentId);
    console.log(p.positionId);
  })
}

/*
  MappedType
  特定のプロパティを抽出して、さらにそれに型をつけて返す、という使い方の例
  type Pick<T, K extends keyof T> = { [P in K]: T[P]; };
*/
function pickProps<T, K extends keyof T>(obj: T, targetProps: Array<K>): Pick<T, K> {
  let shallowCopy = {};
  Object.keys(obj)
    .filter(key => targetProps.indexOf(key as K) >= 0)
    .forEach(key => {
      shallowCopy[key] = obj[key];
    });
  return shallowCopy as Pick<T, K>;
}

function printProps(user: User) {
  console.log('printProps')
  console.dir(pickProps(user, ['id', 'name']));
}

// Conditional types
// TODO

export default function type() {
  const user = new User('1', '山田太郎', 't_yamada', [{departmentId: 'xxx', positionId:'yyy'}]);
  printPostList(user.postList);
  printProps(user);
}