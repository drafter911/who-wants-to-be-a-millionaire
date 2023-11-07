export async function makeFakeAsyncCall(stallTime: number = 1000): Promise<void> {
  await new Promise((resolve) => { setTimeout(resolve, stallTime); });
}

export default makeFakeAsyncCall;
