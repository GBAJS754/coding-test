function solution(maps) {
    const dx = maps.length;
    const dy = maps[0].length;
    const queue = [];
    const nx = [-1, 1, 0, 0];
    const ny = [0, 0, 1, -1];

    const dfs = (x, y) => {
      queue.push([x, y]);

      while (queue.length) {
        const [vx, vy] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const mx = vx + nx[i];
          const my = vy + ny[i];

          if (mx >= 0 && my >= 0 && mx < dx && my < dy && maps[mx][my] == 1) {
            queue.push([mx, my]);
            maps[mx][my] = maps[vx][vy] + 1;
          }
        }
      }
    };

    dfs(0, 0);
    
    return maps[dx-1][dy-1] <= 1 ? -1 : maps[dx-1][dy-1] 
}