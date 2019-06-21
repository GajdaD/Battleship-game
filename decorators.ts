export function log(target: any, name: string, descriptor: any){
  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
      var result = originalMethod.apply(this, args);
      const info = document.getElementById('d_info2') as HTMLElement;
      info.innerHTML += `Ruch : ${result}`+"\n";
      return result;
  }
}