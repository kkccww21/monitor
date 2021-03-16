expandedRowKeys:()=>this.state.expandedRowKeys,
        expandIcon:(pops)=>{
          let {expandedRowKeys}=this.state;
          let expanded=expandedRowKeys.indexOf(pops.record.id)>-1;
          if(pops.record.id%2==0)return;
          return <Icon type={expanded?"minus-square":"plus-square"} onClick={()=>{
            let {expandedRowKeys}=this.state;
            if(expanded){
              expandedRowKeys.splice(expandedRowKeys.indexOf(pops.record.id),1);
            }else{
              expandedRowKeys.push(pops.record.id);
            }
            this.setState({expandedRowKeys})
          }}/>
        },
        expandedRowRender:(record, index, indent, expanded)=>{
          return <Table columns={[{key:'type',dataIndex:'type',title:'类型'},{key:'work_no',dataIndex:'work_no',title:'工号'}]} dataSource={[record]} pagination={false} size="small"/>;
        },
        
        
        
        expandedRowRender={this.props.expandedRowRender} expandIcon={this.props.expandIcon} expandRowByClick={this.props.expandRowByClick} expandedRowKeys={this.props.expandedRowKeys?this.props.expandedRowKeys():[]}
